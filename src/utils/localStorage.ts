class LocalStorageService {
  private ls: Storage | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.ls = window.localStorage;
    }
  }

  setItem<T>(key: string, value: T): void {
    if (this.ls !== null) {
      const serializedValue = JSON.stringify(value);
      this.ls.setItem(key, serializedValue);
    }
  }

  getItem<T>(key: string): T | null {
    if (this.ls !== null) {
      const serializedValue = this.ls.getItem(key);
      if (serializedValue === null) {
        return null;
      }
      try {
        return JSON.parse(serializedValue) as T;
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.ls !== null) {
      this.ls.removeItem(key);
    }
  }

  clear(): void {
    if (this.ls !== null) {
      this.ls.clear();
    }
  }

  key(index: number): string | null {
    if (this.ls !== null) {
      return this.ls.key(index);
    }
    return null;
  }

  get length(): number {
    if (this.ls !== null) {
      return this.ls.length;
    }
    return 0;
  }
}

const localStorageService = new LocalStorageService();

export const saveUserData = <T>(userData: T): void => {
  localStorageService.setItem('userData', userData);
};

export const getUserData = <T>(): T | null => {
  return localStorageService.getItem<T>('userData');
};

export const removeUserData = (): void => {
  localStorageService.removeItem('userData');
};

export const updateUserData = (updatedData: any) => {
  const existingData = getUserData<any>();
  if (!existingData) return;

  const newData = {
    ...existingData,

    // ✅ top-level fields (like isBanned, isTrainingComplete)
    ...updatedData,

    // ✅ user fields safely merge
    ...(updatedData.user && {
      userName: updatedData.user.userName ?? existingData.userName,
      mobileNumber: updatedData.user.mobileNumber ?? existingData.mobileNumber,
      countryCode: updatedData.user.countryCode ?? existingData.countryCode,
      countryName: updatedData.user.countryName ?? existingData.countryName,
      invitationCode: updatedData.user.invitationCode ?? existingData.invitationCode,
      currentPlan: updatedData.user.currentPlan ?? existingData.currentPlan,
      performance: updatedData.user.performance ?? existingData.performance,
    }),

    // ✅ wallet merge (perfect)
    ...(updatedData.wallet && {
      wallet: {
        ...existingData.wallet,
        ...updatedData.wallet,
      },
    }),
  };

  saveUserData(newData);
};

export default localStorageService;