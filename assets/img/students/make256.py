import os
from PIL import Image

def resize_images_in_directory(directory, target_size=(256, 256)):
    # Check if the directory exists
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return

    # List all files in the directory
    files = os.listdir(directory)

    # Process each file in the directory
    for filename in files:
        file_path = os.path.join(directory, filename)

        # Try to open the file as an image
        try:
            with Image.open(file_path) as img:
                # Check the size of the image
                if img.size != target_size:
                    # Resize the image
                    img = img.resize(target_size, Image.ANTIALIAS)
                    img.save(file_path)
                    print(f"Resized image: {filename}")
                else:
                    print(f"Image already 256x256: {filename}")
        except Exception as e:
            print(f"Skipping file {filename}, not a valid image: {e}")

if __name__ == "__main__":
    # Specify the directory containing images
    directory = "."
    resize_images_in_directory(directory)