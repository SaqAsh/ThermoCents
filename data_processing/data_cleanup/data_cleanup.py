import pandas as pd


def remove_null_columns(df: pd.DataFrame) -> pd.DataFrame:
    """Remove columns from DataFrame where all values are null.

    A column is considered a null column if the number of null elements equals
    the total number of rows in the DataFrame.

    Args:
        df (pd.DataFrame): Input DataFrame to process.

    Returns:
        pd.DataFrame: DataFrame with all-null columns removed.
    """

    # Treat empty strings as missing values before computing null counts
    df.replace("", pd.NA, inplace=True)

    # counts of null elements in a column
    null_counts = df.isna().sum()

    # filtered null columns (columns where every value is null)
    all_null_columns = null_counts[null_counts == len(df)].index

    # Remove the null columns
    df = df.drop(columns=all_null_columns)

    return df
