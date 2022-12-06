import {BaseCollectionPaginationCountResponse, Windows81GeneralConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows81GeneralConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows81GeneralConfiguration[];
}
