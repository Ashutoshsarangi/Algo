#include<bits/stdc++.h>
using namespace std;

int main()
{

	// #ifndef ONLINE_JUDGE
	// freopen("input.txt", "r", stdin);
	// freopen("output.txt", "w", stdout);
	// #endif

	int n, item, q, temp, VPos, Aind;

	cin>>n>>q;
	vector<int> v[n];
	//Taking input from Array
	for(int i = 0;i<n;i++){
		cin>>item;
		for(int j = 0;j<item;j++){
			cin>>temp;
			v[i].push_back(temp);
		}
	}

	for(int i = 0; i<q;i++){
		cin>>VPos>>Aind;
		cout<<v[VPos][Aind]<<"\n";

	}

	
	return 0;

}
