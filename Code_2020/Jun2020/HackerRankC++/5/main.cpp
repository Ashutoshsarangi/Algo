#include<bits/stdc++.h>
using namespace std;

void printLetter(int n);

int main()
{

	// #ifndef ONLINE_JUDGE
	// freopen("input.txt", "r", stdin);
	// freopen("output.txt", "w", stdout);
	// #endif

	int a, b;

	cin>>a>>b;
	for(int i = a;i<=b; i++){
		printLetter(i);
	}
	
	return 0;

}
void printLetter(int n){
	switch(n){
		case 1:
		     cout<<"one"<<"\n";
		     break;
		case 2:
		     cout<<"two"<<"\n";
		     break;
		case 3:
		     cout<<"three"<<"\n";
		     break;
		case 4:
		     cout<<"four"<<"\n";
		     break;
		case 5:
		     cout<<"five"<<"\n";
		     break;
		case 6:
		     cout<<"six"<<"\n";
		     break;
		case 7:
		     cout<<"seven"<<"\n";
		     break;
		case 8:
		     cout<<"eight"<<"\n";
		     break;
		case 9:
		     cout<<"nine"<<"\n";
		     break;
		default:
			if(n%2 == 0 ){
				cout<<"even"<<"\n";
			}else{
				cout<<"odd"<<"\n";
			}
			break;
	}
}