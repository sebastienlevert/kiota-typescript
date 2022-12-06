import {BaseCollectionPaginationCountResponse, Windows10GeneralConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10GeneralConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows10GeneralConfiguration[];
}
