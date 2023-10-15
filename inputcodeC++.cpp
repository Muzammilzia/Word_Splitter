#include <iostream>

int main()
{
    int counter = 0; // Initialize the counter to 0

    while (true)
    { // Infinite loop
        std::cout << "Counter: " << counter << std::endl;
        std::cout << "1. Increment" << std::endl;
        std::cout << "2. Quit" << std::endl;

        int choice;
        std::cin >> choice;

        if (choice == 1)
        {
            counter++; // Increment the counter
        }
        else if (choice == 2)
        {
            break; // Exit the loop and quit the program
        }
        else
        {
            std::cout << "Invalid choice. Please select 1 to increment or 2 to quit." << std::endl;
        }
    }

    std::cout << "Goodbye!" << std::endl;

    return 0;
}
