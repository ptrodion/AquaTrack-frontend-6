import { createSelector } from '@reduxjs/toolkit';
import { selectUser } from '../user/selector';

export const selectMonthWater = state => state.water.monthWater;
export const selectDailyWater = state => state.water.dailyWater;
export const selectWaterIsLoading = state => state.water.isLoading;
export const selectWaterError = state => state.water.error;
export const selectChoosenDailyWater = state => state.water.choosenDailyWater;

export const selectPercentOfDrinkingWater = createSelector(
  [selectDailyWater, selectUser],
  (dayliWater, user) => {
    const amountOfWater = dayliWater.reduce(
      (accumulator, currentDay) => accumulator + currentDay.amount,
      0
    );
    if (user !== null) {
      const percentOfDrinkingWater =
        (amountOfWater / user.currentDailyNorm) * 100;

      return percentOfDrinkingWater;
    }
    return 0;
  }
);
