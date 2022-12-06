import {BaseCollectionPaginationCountResponse, Windows10CustomConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10CustomConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows10CustomConfiguration[];
}
