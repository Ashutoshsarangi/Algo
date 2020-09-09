#include<bits/stdc++.h>
using namespace std;

#define REP(i,a,b) for (int i = a; i < b; i++)
typedef long long ll;


class Node{
	Node next;
	int data;
	public Node(int val){
		this.data = val;
	}
}

public class LinkedList{
	Node head;
	public void append(int data){
		if(head == null){
			head = new Node(data);
			return;
		}
		Node current = head;
		while(current.next != null){
			current = current.next;
		}
		current = new Node(data);
	}

	public void prepend(int data){
		Node newNode = new Node(data);
		newNode = head;
		head = newNode;
	}


	public void delete(int data){
		if (head == null){
			return;
		}

		if(head.data == data){
			head = head.next;
		}

		Node current = head;
		while(current.next != null){
			if(current.next.data == data){
				current.next = current.next.next;
			}else{
				current = current.next;
			}
		}
	}

	public void traversal(){
		Node current = head;
		while(current.next != null){
			cout<<current.data<<"\n";
			current = current.next;
		}
	}
}

int main()
{

	#ifndef ONLINE_JUDGE
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);
	#endif

	int n;
	int val;
	LinkedList l = new LinkedList();

	cin>>n;
	//Taking input from Array
	REP(i, 0, n){
		cin>>val;
		l.append(val);
	}

	l.traversal();
	
	return 0;

}
