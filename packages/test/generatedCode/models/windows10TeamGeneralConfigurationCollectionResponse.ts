import {BaseCollectionPaginationCountResponse, Windows10TeamGeneralConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10TeamGeneralConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows10TeamGeneralConfiguration[];
}
