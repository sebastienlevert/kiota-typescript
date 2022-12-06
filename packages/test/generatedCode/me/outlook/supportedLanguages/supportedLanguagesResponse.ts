import {BaseCollectionPaginationCountResponse, LocaleInfo} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SupportedLanguagesResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LocaleInfo[];
}
