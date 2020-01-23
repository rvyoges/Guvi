#You are given three numbers A, B & C. Print the largest amongst these three numbers

a=input()
b=input()
c=input()
if(a>b and a>c):
	print(a)
if(b>a and b>c):
	print(b)
else: print(c)
