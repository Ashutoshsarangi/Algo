#include<bits/stdc++.h>
using namespace std;

int main()
{

	// #ifndef ONLINE_JUDGE
	// freopen("input.txt", "r", stdin);
	// freopen("output.txt", "w", stdout);
	// #endif

	int n, item;
	vector<int> v;

	cin>>n;

	for(int i = 0;i<n;i++){
		cin>>item;
		v.push_back(item);
	}
	for(int j = v.size()-1; j>=0; j--){
		cout<<v[j]<<" ";
	}

	
	return 0;

}
