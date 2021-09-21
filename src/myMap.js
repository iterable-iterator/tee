import {starmap} from '@iterable-iterator/map';
import {_zip} from '@iterable-iterator/zip';

const myMap = (callable, ...iterables) => starmap(callable, _zip(iterables));

export default myMap;
