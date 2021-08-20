import re

print("Write raw line below")
while(1):
	x=input()
	ls = x.split()
	data = [None] * 3
	data[0] = ls[0]
	data[1] = " ".join(ls[1:-1])
	data[2] = ls[-1]
#	res = f"\"{data[0]} {data[1]}\": \"<a href=\"{data[2]}\">{data[2]}</a>\","
	res = f"\"{data[0]} {data[1]}\": \"{data[2]}\","
	print(res)
	print()