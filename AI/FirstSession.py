import pandas as pd
from color import *
l = [[1, 2, 4, 5],
     [3, 5, 4, 8],
     [9, 8, 4, 3],
     [9, 41, 8, 7]]

df = pd.DataFrame(l, columns=['a', 'b', 'c', 'd'])
#print a "hello world" message in red
print(green("hello world") + yellow(" this is my first colored message"))