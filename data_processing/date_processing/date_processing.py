import pandas as pd
from typing import Literal

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

    df_copy[col_name] = pd.to_datetime(df_copy[col_name])  # Transform the date column to datetime object

    # based on the granularity level we will transform all instances of the column to the desired date truncation 
    match (granularity_level):
        case "month":
            df_copy[col_name] = df_copy[col_name].dt.strftime("%m-%d")
        case "day":
            df_copy[col_name] = df_copy[col_name].dt.strftime('%d')
        case _:
            raise ValueError("Invalid granularity level")

    return df_copy