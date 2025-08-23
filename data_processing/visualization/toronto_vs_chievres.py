import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

plt.style.use("seabord-v0_8")
sns.set_palette("husl")

fig, ax = plt.subplots(figsize=(10, 6))

ax.plot([1, 2, 3, 4], [1, 4, 2, 3])

plt.show()
