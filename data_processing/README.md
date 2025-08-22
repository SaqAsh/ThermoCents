# Data Processing Module

This module contains data processing utilities for the ThermoCents project, including date manipulation functions and sample energy datasets for analysis.

## Prerequisites

-   Python 3.13 or higher
-   UV package manager - Download from [https://docs.astral.sh/uv/getting-started/installation/](https://docs.astral.sh/uv/getting-started/installation/)

## Recommended VS Code Extensions

For the best development experience, install these VS Code extensions:

-   **Python** (ms-python.python) - Python language support
-   **Pylance** (ms-python.vscode-pylance) - Python language server
-   **Jupyter** (ms-toolsai.jupyter) - Jupyter notebook support

## Setup Instructions

### 1. Create and Activate Virtual Environment

You'll need to create your own virtual environment (it's not included in git):

```bash
# Navigate to the data_processing directory
cd data_processing

# Create virtual environment with UV
uv venv

# Activate the virtual environment
source .venv/bin/activate  # On macOS/Linux
# or
.venv\Scripts\activate     # On Windows
```

### 2. Install Dependencies

With UV:

```bash
uv sync
```

### 3. Configure VS Code Python Interpreter

Set VS Code to use the virtual environment's Python interpreter:

1. Open VS Code in the `data_processing` directory
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Python: Select Interpreter"
4. Choose the interpreter from your `.venv` folder:
    - **macOS/Linux**: `./venv/bin/python`
    - **Windows**: `.\.venv\Scripts\python.exe`

Alternatively, you can click on the Python version in the bottom-left status bar and select the correct interpreter.

### 4. Verify Installation

Run the main script to verify everything is working:

```bash
python main.py
```

You should see: `Hello from data-processing!`

## Project Structure

```
data_processing/
├── main.py                    # Main entry point
├── pyproject.toml            # Project configuration and dependencies
├── date_processing/          # Date processing utilities
│   └── date_processing.py    # Date manipulation functions
├── kaggle_data/             # Sample energy datasets
│   ├── chievres.csv         # Chievres Airport weather data
│   ├── KAG_energydata_complete.csv  # Complete energy dataset
│   └── toronto.csv          # Toronto weather data
└── tutorial_testing/        # Testing and tutorial notebooks
    └── notebook.ipynb       # Jupyter notebook for testing
```

### Running Jupyter Notebook

To run Jupyter notebooks for interactive data analysis:

```bash
# Make sure your virtual environment is activated
source .venv/bin/activate

# Install dependencies if you haven't already
uv sync

# Start Jupyter notebook
jupyter notebook
```

This will start a local server (usually at http://localhost:8888) where you can:

-   Navigate to your notebooks (like `main.ipynb`)
-   Run interactive data analysis
-   Create visualizations and explore your datasets
-   Work with the ThermoCents energy and weather data

**Note**: If you're using WSL, you may see some browser-related permission errors in the terminal. These are normal and don't affect functionality - just manually open the URL in your browser.

### Running Tests

If you have Jupyter notebooks for testing:

```bash
# Start Jupyter
jupyter notebook tutorial_testing/notebook.ipynb
```

### Adding New Dependencies

Using UV:

```bash
uv add package_name
```

## Troubleshooting

### Virtual Environment Issues

If you encounter issues with the virtual environment:

1. Ensure you're in the correct directory (`data_processing/`)
2. Deactivate any existing virtual environment: `deactivate`
3. Reactivate the provided virtual environment: `source .venv/bin/activate`

### Dependency Issues

If packages are missing:

```bash
# Make sure virtual environment is activated
source .venv/bin/activate

# Reinstall dependencies
uv sync
```

### Python Version Issues

This project requires Python 3.13+. Check your Python version:

```bash
python --version
```

If you need to install Python 3.13+, visit [python.org](https://www.python.org/downloads/) or use a version manager like pyenv.

## Contributing

1. Ensure your virtual environment is activated
2. Install development dependencies
3. Make your changes
4. Test your changes with the provided datasets
5. Update this README if you add new functionality
