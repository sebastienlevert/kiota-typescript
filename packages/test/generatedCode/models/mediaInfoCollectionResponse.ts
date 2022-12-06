import {BaseCollectionPaginationCountResponse, MediaInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MediaInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MediaInfo[];
}
