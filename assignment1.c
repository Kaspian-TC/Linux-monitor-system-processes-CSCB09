#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/sysinfo.h> //For obtaining memory
#include <unistd.h>
#include <sys/utsname.h>//For obtaining system info
#include <utmp.h>//For obtaining user info
#define INDENT_OFFSET 3
/*

Assignment 1 CSCB09
By: Kaspian Thoft-Christensen 
2022/2/2

*/
float calculateCPUUsage(){ //doesn't actually return percentage but rather the exact value
	FILE* stats = fopen("/proc/stat","r"); //opens /proc/stat
	char line[100]; //100 is actually a really good upper bound for the size of line
	fgets(line,100,stats);
	char delimiter[2] = " ";
	char * word;	
	word = strtok(line, delimiter); //uses strtok to split string line into individual words
	word = strtok(NULL, delimiter);
	char i = 0; 
	unsigned long total = 0; //total time
	unsigned long idle;//time idling
	while(word != NULL) {
		total+=(long)atoi(word); //adds time to total
		if(i==3)
			idle = (long) atoi(word); //assigns the idle amount 
		word = strtok(NULL, delimiter);
		i++;
	}
	fclose(stats);
	return (float)(total-idle)/total;
}
int printSystemDetails(int offset){//Prints system information 
	struct utsname *sysDet = malloc(sizeof *sysDet);
	uname(sysDet);
	printf("\033[%d;0H### System Information ### \n",offset+1);
	printf("\033[%d;0H System Name = %s\n",offset+2, sysDet->sysname);
	printf("\033[%d;0H Machine Name = %s\n",offset+3,sysDet->nodename);
	printf("\033[%d;0H Version = %s\n",offset+4,sysDet->version);
	printf("\033[%d;0H Release = %s\n",offset+5,sysDet->release);
	printf("\033[%d;0H Architecture = %s\n",offset+6,sysDet->machine);
	printf("\033[%d;0H---------------------------------------\n",offset+7);
	free(sysDet);
	return offset+7;
}
int printUsers(int offset){//function prints users list
	struct utmp *ut;
	utmpname(_PATH_UTMP);
	setutent();
	ut =getutent();
	while(ut!=NULL){
		if(ut->ut_type==USER_PROCESS)
			printf("\033[%d;0H %s       %s (%s)",++offset,ut->ut_user,ut->ut_line,ut->ut_host);
		ut = getutent();
	}
	endutent();
	printf("\033[%d;0H---------------------------------------\n",++offset);
	return offset;
}
float basicRound(float f){ //helper function for rounding floats used in printMemoryGraphics
	if(f>=0)
		return (float)((int)(f*100+0.5))/100;
	else
		return (float)((int)(f*100-0.5))/100;
}
void printChars(char c, int size){ //helper function for printMemoryAndCPU and printCPUGraphics
	for(int i = 0; i<size;i++)
			printf("%c",c);
	return;
}
int printCPUGraphics(int offset,float size){//number of bars is equivalent to the percentage+1
	printf("\033[%d;0H\033[94m         |",++offset);
	printChars('|',(int)basicRound(size));
	printf("\033[0m %.2f",size);
	return offset;
}
void printMemoryGraphics(float* ramBefnAft){
	//helper function that adds the graphics for printMemoryAndCPU
	float diff; //difference between previous memory call and current
	int size; //how many hundreths of a gigabyte 
	if(ramBefnAft[1]==-1)//in case there is no difference to be shown
		printf("   |o 0.00");
	else{
		printf("   |");
		diff = ramBefnAft[0]-ramBefnAft[1];//calculates difference
		size = abs((int)(100*basicRound(diff)));//finds size to find amount of printedC to be printed
		if(diff>=0)//assigns printedC to required char
			printChars('#',size);
		else
			printChars(':',size);
		if(diff>=0)//adds '*' or '@' depending on whether diff is positive or negative
			printf("* ");
		else if(diff<0)
			printf("@ ");
		printf("%.2f",basicRound(diff));//prints rounded background
	}
	printf(" (%.2f) ",ramBefnAft[0]);
	ramBefnAft[1] = ramBefnAft[0];//sets before ram as after ram
	return;
}
int printMemoryAndCPU(char displayGraphics,int samples,int tdelay,int offset){
	struct sysinfo *sus = malloc(sizeof *sus); //weird name, anyways
	float usedRam [2] = {-1,-1};
	float cpuUsage;
	int cpuOffset = 1;//offset relative to the cpu section
	printf("\033[%d;0HNumber of cores: \n",offset+1);
	for(int i =1;i<=samples;i++){
		sysinfo(sus);
		cpuUsage = calculateCPUUsage();
		//print memory info
		usedRam[0] = (float)(sus->totalram-sus->freeram)/1073741824;
		printf("\033[%d;0H%.2f GB / %.2f GB  -- ",i+INDENT_OFFSET,usedRam[0],(float)(sus->totalram)/1073741824);
		printf("%.2f GB / %.2f GB",(float)(sus->totalram-sus->freeram+(sus->totalswap-sus->freeswap))/1073741824,(float)(sus->totalram+sus->totalswap)/1073741824);
		//graphics functions
		if(displayGraphics==1){
			printMemoryGraphics(usedRam);
			cpuOffset = printCPUGraphics(offset+cpuOffset,100*cpuUsage) - offset;
		}
		//print cpu info
		printf("\033[%d;0H total cpu use = %.2f%%",offset+1,100*cpuUsage);
		printf("\n");
		sleep(tdelay);
	}
	free(sus);
	return offset+cpuOffset;
}
void startPrint(char displaySystem,char displayUser,char displayGraphics,int samples,int tdelay){
	//this functions starts the obtaining and printing process
	printf("\x1B[2J");//clears the screen
	int offset = samples+INDENT_OFFSET+2; //tracks where the cursor should go
	if(displayUser==1){//displays users
		if(displaySystem==0)
			offset = 1;
		printf("\033[%d;0H### Sessions/users ### \n",offset);
		offset = printUsers(offset);//returns last line printed
	}
	else
		offset = samples+INDENT_OFFSET+1;
	if(displaySystem==1){//displays memory and cpu	
		printf("\033[1;0HNbr of samples: %d -- every %d secs\n",samples,tdelay);
		printf("\033[%d;0H---------------------------------------\n",INDENT_OFFSET-1);
		printf("\033[%d;0H### Memory ### (Phys.Used/Tot -- Virtual Used/Tot) \n",INDENT_OFFSET);
		printf("\033[%d;0H---------------------------------------",samples+INDENT_OFFSET+1);
		offset = printMemoryAndCPU(displayGraphics,samples,tdelay,offset); //offset at this point 
		printf("\033[%d;0H---------------------------------------\n",++offset);
	}
	//system info
	offset = printSystemDetails(offset);
	return;
}
int main(int argc, char** argv){
	char displaySystem = 1; //indicates whether or not system usage should be generated
	char displayUser = 1; //indicates whether or not system usage should be generated
	char displayGraphics = 0;//0 - display no graphics, 1 - display graphics
	char checkSample = 0; //makes sure that sample has been used
	//The above are chars cause idk how to make a type with 1 bit
	int samples = 10; //indicates how many times the statistics are going to be collected and results will be average and reported based on the number of repetitions.
	int tdelay = 1;//how frequently to sample in seconds
	for(int i = 1;i<argc;i++){
		if(strcmp(argv[i],"--system")==0){
			if(displaySystem==0) //in the case that --user has already passed
				displaySystem=1;
			else
				displayUser=0;
		}
		else if(strcmp(argv[i],"--user")==0){
			if(displayUser==0)//in the case that --system has already passed
				displayUser=1;
			else
				displaySystem=0;
		}
		else if(strcmp(argv[i],"--graphics")==0||strcmp(argv[i],"--g")==0)
			displayGraphics=1;
		else if(strcmp(argv[i],"--sample=")==0){
			samples = abs(atoi(argv[i+1])); //is 0 if invalid
			checkSample = 1;
		}
		else if(strcmp(argv[i],"--tdelay=")==0&& checkSample==1)
			tdelay = abs(atoi(argv[i+1])); //is 0 if invalid
	}
	if(displaySystem==0)
		samples=0;
	startPrint(displaySystem,displayUser,displayGraphics,samples,tdelay);
	return 0;
}