import {BaseCollectionPaginationCountResponse, OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OmaSetting[];
}
