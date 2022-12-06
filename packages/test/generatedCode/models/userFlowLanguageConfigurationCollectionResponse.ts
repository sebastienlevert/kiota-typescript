import {BaseCollectionPaginationCountResponse, UserFlowLanguageConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowLanguageConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserFlowLanguageConfiguration[];
}
