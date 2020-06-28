#include<bits/stdc++.h>
using namespace std;

int max_of_four(int a, int b, int c , int d){
	int tempmaxL,tempmaxR, max;
	if(a>b){
		tempmaxL = a;
	}else{
		tempmaxL = b;
	}

	if(c>d){
		tempmaxR = c;
	}else{
		tempmaxR = d;
	}

	if(tempmaxR > tempmaxL){
		return tempmaxR;
	}
	else{
		return tempmaxL;
	}


}


int main()
{

	#ifndef ONLINE_JUDGE
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);
	#endif

	int *a, *b;

	//Directly code and Submit from Editor (Hacker Rank)

	cin>>*a>>*b;
	// int temp = max_of_four(a, b, c, d);
	cout<<a<<b;
	
	return 0;

}
