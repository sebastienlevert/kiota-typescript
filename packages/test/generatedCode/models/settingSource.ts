import {SettingSourceType} from './settingSourceType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SettingSource extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Not yet documented */
    displayName?: string;
    /** Not yet documented */
    id?: string;
    /** The sourceType property */
    sourceType?: SettingSourceType;
}
