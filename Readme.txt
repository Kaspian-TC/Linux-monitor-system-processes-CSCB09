Linux monitor system processes information
By: Kaspian Thoft-Christensen

This code works on Linux (and macOS but this has not been tested)

How to compile code:
gcc assignment1.c

Commands:
	--system : Prints everything but the users section 
	--user : Prints everything but the memory and cpu section
	--graphics or --g : Prints extra graphical output for the memory and cpu section
	--sample= N : Changes the standard number of samples from 10 to N. N must be separated from --sample= by a space.  (Example: "--sample= 15 ")
	--tdelay= T : Changes the standard delay between samples from 1 to T. T is separated from --tdelay= by a space (Example: "--tdelay= 3 ")
	
	-The order of the command line inputs does not matter except for --tdelay= T which must follow --sample= N but does not have to directly follow it. (--sample= 5 --g --tdelay= 2 is valid)
	-All invalid commands will be ignored
	-Negative numbers for --sample= and --tdelay= will show up as positive instead
	

Documentation:

Important variables to know:
	-the offset variable which persists throughout the program represents the last line which has been printed. 

---Functions---
int main(int argc, char** argv)
Reads command line arguments, assigns values to the appropriate variables, then calls startPrint()

------------------------------------
void startPrint(char displaySystem,char displayUser,char displayGraphics,int samples,int tdelay)
Takes in values and starts the printing process by running the respective printing functions. 
displaySystem determines whether memory and cpu sections should be printed. displayUser determines whether the user section should be printed. displayGraphics determines whether the extra graphics for memory and cpu sections should be printed. 
samples is the number of times memory and cpu should be sampled and tdelay is the delay between each sample.

------------------------------------
int printMemoryAndCPU(char displayGraphics,int samples,int tdelay,int offset){
Prints the memory and cpu sections samples number of times between tdelay intervals
displayGraphics, samples, tdelay, have the same use as mentioned above previously.
if displayGraphics is 1, call printMemoryGraphics and printCPUGraphics.
Used in startPrint.
Returns which last line number was printed.

------------------------------------
void printMemoryGraphics(float* ramBefnAft)
ramBefnAft is the a pointer to an array of floats of size 2.
ramBefnAft[0] is the current amount of ram used (in gigabytes) and ramBefnAft[1] is the amount of ram used from the previous sample.
printMemoryGraphics prints the difference of ramBefnAft[0] and ramBefnAft[1] as well as a slider showing how many hundredths of a gigabyte difference there are.
Used in printMemoryAndCPU

------------------------------------
int printCPUGraphics(int offset,float size)
Helper function for printMemoryAndCPU
Prints a slider which corresponsds to the amount of (rounded) %cpu usage with an extra '|' at the beginning.
Size is the percentage of cpu usage.
Offset here is similiar to the rest of the program, it represents the last line number that was printed.
Returns the last line number printed (offset)

------------------------------------
void printChars(char c, int size)
Helper function for printMemoryAndCPU and printCPUGraphics that prints a char c, size amount of times.

------------------------------------
float basicRound(float f) 
Performs basic rounding of floats to the nearest 100.
Used in printMemoryGraphics and printCPUGraphics.

------------------------------------
int printUsers(int offset)
Takes in the offset to determine the first line to print to.
Prints username, device name, and host name(or address) for each user connected to the computer.
Used in startPrint.
Returns last line number that was printed.

------------------------------------
int printSystemDetails(int offset)
Takes in the offset to determine the first line to print to.
prints the system name, machine name, Linux version, version release, and architecture on separate lines
Used in startPrint.
Returns the last line printed (isn't used in program but kept in case of revisions)

------------------------------------
float calculateCPUUsage()
Returns a float from 0-1 representing the amount of current cpu usage
Used in printMemoryAndCPU
