import {StackNavigationProp} from '@react-navigation/stack';

type StackParamLists = {
  home: undefined;
  logo: undefined;
  search: undefined;
};

type logoNavigationType = StackNavigationProp<StackParamLists, 'logo'>;