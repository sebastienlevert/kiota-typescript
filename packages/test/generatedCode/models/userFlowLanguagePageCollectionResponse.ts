import {BaseCollectionPaginationCountResponse, UserFlowLanguagePage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowLanguagePageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserFlowLanguagePage[];
}
