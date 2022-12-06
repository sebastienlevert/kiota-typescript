import {IosHomeScreenFolderPage, IosHomeScreenItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenFolder extends IosHomeScreenItem, Partial<Parsable> {
    /** Pages of Home Screen Layout Icons which must be applications or web clips. This collection can contain a maximum of 500 elements. */
    pages?: IosHomeScreenFolderPage[];
}
