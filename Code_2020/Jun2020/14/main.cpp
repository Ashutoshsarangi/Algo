#include<bits/stdc++.h>
using namespace std;

int main()
{

	#ifndef ONLINE_JUDGE
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);
	#endif

	// Write Your Code Here

	int n;
	// vector<int> v;
	// vector<int>::iterator it;
	map<int, int> m;
	map<int, int>::iterator itr;
	cin >> n;
	
	for(int i = 0;i< n-1; i++){
		int temp;
		cin>>temp;
		m.insert(pair<int, int>(temp, 1));
	}				
	for(int j = 1; j<= n; j++){
		itr = m.find(j);
		if(itr->first == 0){
			cout<<j;			
		}
	}
	return 0;

}