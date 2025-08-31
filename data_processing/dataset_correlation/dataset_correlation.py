import pandas as pd

def get_season(date: pd.Timestamp) -> str:
    """Return the season that a given timestamp falls into using the Northern Hemisphere monthly seasonal classification.

    A date is classified into one of four seasons:
    - Winter: December, January, February
    - Spring: March, April, May
    - Summer: June, July, August
    - Fall: September, October, November

    Args:
        date (pd.Timestamp): Date to check, a pandas Timestamp object.

    Returns:
        str: Season name ("Winter", "Spring", "Summer", "Fall").
    """

    # extract month from the date
    month = date.month

    # determine the season based on the month
    if month in [3, 4, 5]:
        return "Spring"
    elif month in [6, 7, 8]:
        return "Summer"
    elif month in [9, 10, 11]:
        return "Fall"
    else:
        return "Winter"
    
def find_seasonal_correlation(toronto_df: pd.DataFrame, belgium_df: pd.DataFrame) -> Dict[str, pd.DataFrame]:

    """Calculate seasonal Pearson correlations between Toronto and Belgium weather data.

    Args:
        toronto_df (pd.DataFrame): Toronto weather data with datetime index
        belgium_df (pd.DataFrame): Belgium weather data with datetime index

    Returns:
        Dict[str, pd.DataFrame]: Dictionary with seasons as keys and correlation matrices as values
    """
    # ensure both dataframes have datetime index by replacing exisitng indices with datetime indices
    toronto_df.index = pd.to_datetime(toronto_df.index)
    belgium_df.index = pd.to_datetime(belgium_df.index)
    
    # add season column to both dataframes
    toronto_df['season'] = toronto_df.index.map(get_season)
    belgium_df['season'] = belgium_df.index.map(get_season)

    # dictionary to store seasonal correlation coefficients
    seasonal_correlations = {}

    # iterate through dataframes and calculate correlations for each season 
    for season in ['Spring', 'Summer', 'Fall', 'Winter']:
        # filter dataframes for the current season (axis 1 drops the 'season' column after filtering)
        toronto_season = toronto_df[toronto_df['season'] == season].drop('season', axis = 1)
        belgium_season = belgium_df[belgium_df['season'] == season].drop('season', axis = 1)

        # create an empty DataFrame to hold the correlation coefficients with the same rows as toronto_season and columns as belgium_season
        correlation = pd.DataFrame(
            index=toronto_season.columns,
            columns=belgium_season.columns
        )

        # calculate Pearson correlation for each pair of matching columns
        for tor_col in toronto_season.columns:
            for bel_col in belgium_season.columns:
                correlation.loc[tor_col, bel_col] = toronto_season[tor_col].corr(belgium_season[bel_col])
        
        # each entry in the seasonal_correlations dictionary has a DataFrame of coefficients with the season as the key
        seasonal_correlations[season] = correlation
    
    return seasonal_correlations