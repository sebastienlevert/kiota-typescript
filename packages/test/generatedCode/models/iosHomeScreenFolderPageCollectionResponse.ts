import {BaseCollectionPaginationCountResponse, IosHomeScreenFolderPage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenFolderPageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosHomeScreenFolderPage[];
}
