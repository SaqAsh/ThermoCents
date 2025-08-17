import pandas as pd
from typing import Literal

def col_to_date(df: pd.DataFrame, col_name: str) -> pd.DataFrame:
    """
    Convert a DataFrame column to pandas datetime dtype.

    Args:
        df (pd.DataFrame): The input DataFrame
        col_name (str): The name of the column to convert to datetime

    Returns:
        pd.DataFrame: DataFrame with the specified column converted to pandas datetime 
    """
    df[col_name] = pd.to_datetime(df[col_name])
    return df


def strip_date_components(df: pd.DataFrame , col_name: str, granularity_level: Literal["month", "day"]) -> pd.DataFrame:
    """
    Strip specified components from date values in a column and return the full DataFrame.
    
    Args:
        df (pd.DataFrame): The input DataFrame
        col_name (str): The name of the column that needs the date transformation
        granularity_level (str): Level of granularity - options to strip year, month

    Returns:
        pd.DataFrame: Full DataFrame with processed date values in the specified column
    """

    df_copy : pd.DataFrame= df.copy() # we make a copy to prevent inplace changes

    # based on the granularity level we will transform all instances of the column to the desired date truncation 
    match (granularity_level):
        case "month":
            df_copy[col_name] = df_copy[col_name].dt.strftime("%m-%d")
        case "day":
            df_copy[col_name] = df_copy[col_name].dt.strftime('%d')
        case _:
            raise ValueError("Invalid granularity level")

    return df_copy

def sort_and_truncate_to_min_date_range(df1: pd.DataFrame, date_col1_name: str, df2: pd.DataFrame, date_col2_name: str) -> tuple[pd.DataFrame, pd.DataFrame]:
    """
    Truncate two DataFrames to share the same latest date by removing rows with dates beyond the minimum maximum date.

    Args:
        df1 (pd.DataFrame): The first DataFrame to be truncated
        date_col1_name (str): The name of the date column in the first DataFrame
        df2 (pd.DataFrame): The second DataFrame to be truncated
        date_col2_name (str): The name of the date column in the second DataFrame

    Returns:
        tuple[pd.DataFrame, pd.DataFrame]: A tuple containing both DataFrames truncated to the same date range, where the ending date is the minimum of the two maximum dates
    """

    max_date_1 = df1[date_col1_name].max()
    max_date_2 = df2[date_col2_name].max()  

    if pd.isna(max_date_1) or pd.isna(max_date_2):
        return df1, df2

    if max_date_1 > max_date_2:
        df1 = df1[df1[date_col1_name] <= max_date_2]
    elif max_date_2 > max_date_1:
        df2 = df2[df2[date_col2_name] <= max_date_1]

    return df1, df2



