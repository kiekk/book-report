#include <stdio.h>

typedef struct _empInfo
{
	int empNum;    // ������ ������ȣ
	int age;     // ������ ����
}EmpInfo;

//int main(void)
//{
//	EmpInfo empInfoArr[1000];
//	EmpInfo ei;
//	int eNum;
//
//	printf("����� ���� �Է�: ");
//	scanf_s("%d %d", &(ei.empNum), &(ei.age));
//	empInfoArr[ei.empNum] = ei;    // �ܹ��� ����!
//
//	printf("Ȯ���ϰ��� ������ ��� �Է�: ");
//	scanf_s("%d", &eNum);
//
//	ei = empInfoArr[eNum];    // �ܹ��� Ž��!
//	printf("��� %d, ���� %d \n", ei.empNum, ei.age);
//	return 0;
//}