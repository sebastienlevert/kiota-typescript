import {Json, WorkbookIcon} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFilterCriteria extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The color property */
    color?: string;
    /** The criterion1 property */
    criterion1?: string;
    /** The criterion2 property */
    criterion2?: string;
    /** The dynamicCriteria property */
    dynamicCriteria?: string;
    /** The filterOn property */
    filterOn?: string;
    /** The icon property */
    icon?: WorkbookIcon;
    /** The operator property */
    operator?: string;
    /** The values property */
    values?: Json;
}
