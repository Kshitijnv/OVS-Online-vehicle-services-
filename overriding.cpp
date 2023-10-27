#include<iostream>
using namespace std;
class A{
    public:
    virtual void display()
    {
        cout<<"base class\n";
    }
};

class B:public A
{
    public:
    void display()
    {
       cout<<"derived class\n"; 
    }
    
};


int main()
{
    B obj;
    obj.display();
    obj.A::display();
    return 0;
}
