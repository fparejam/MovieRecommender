import sys
import json
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

df = pd.read_csv('public/movies.csv')
df = df[df['Plot'].notna()]

tfidf = TfidfVectorizer()
tfidf_matrix = tfidf.fit_transform(df['Plot'])

cosine_sim = cosine_similarity(tfidf_matrix)
indices = pd.Series(df.index, index=df['Title']).drop_duplicates()

def get_recommendations(title, cosine_sim=cosine_sim, num_recommend=10):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    top_similar = sim_scores[1:num_recommend+1]
    movie_indices = [i[0] for i in top_similar]
    final_recommendation = list(df['Title'].iloc[movie_indices])
    return final_recommendation

def get_combined_recommendations(movie_list, num_recommend=10):
    combined_sim_scores = np.zeros(cosine_sim.shape[0])

    for movie_title in movie_list:
        idx = df[df['Title'] == movie_title].index[0]
        sim_scores = cosine_sim[idx]
        combined_sim_scores += sim_scores

    sim_scores = list(enumerate(combined_sim_scores))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    movie_indices = [i[0] for i in sim_scores[1:num_recommend+len(movie_list)]]

    recommended_movies = []
    for i in movie_indices:
        if df['Title'].iloc[i] not in movie_list:
            recommended_movies.append(df['Title'].iloc[i])

    return recommended_movies

if __name__ == "__main__":
    data = json.loads(sys.argv[1])

    if "title" in data:
        title = data["title"]
        recommendations = get_recommendations(title)
    else:
        movie_list = data["movie_list"]
        recommendations = get_combined_recommendations(movie_list)

    print(json.dumps(recommendations))
