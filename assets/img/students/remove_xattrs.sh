#!/bin/bash

# Directory containing the files
directory="."

# Check if directory exists
if [ ! -d "$directory" ]; then
    echo "Directory $directory does not exist."
    exit 1
fi

# Iterate over each file in the directory and remove all extended attributes
find "$directory" -type f | while read file; do
    # Remove each extended attribute from the file
    for attr in $(xattr "$file"); do
        xattr -d "$attr" "$file" && echo "Removed $attr from $file"
    done
done

echo "All extended attributes removed from files in $directory."