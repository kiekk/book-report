#include <stdio.h>

void HanioTowerMove(int num, char from, char by, char to) {
	if (num == 1) {
		printf("���� 1�� %c���� %c�� �̵� \n", from, to);
	}
	else {
		HanioTowerMove(num - 1, from, to, by);
		printf("���� %d��(��) %c���� %c�� �̵� \n", num, from, to);
		HanioTowerMove(num - 1, by, from, to);
	}
}

int main(void) {
	HanioTowerMove(3, 'A', 'B', 'C');
	return 0;
}