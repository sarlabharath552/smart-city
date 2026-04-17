import numpy as np
from sklearn.linear_model import LinearRegression

def predict_aqi(history):
    if len(history) < 5:
        return []

    X = np.array(range(len(history))).reshape(-1, 1)
    y = np.array(history)

    model = LinearRegression()
    model.fit(X, y)

    future = np.array(range(len(history), len(history) + 5)).reshape(-1, 1)
    predictions = model.predict(future)

    return predictions.tolist()