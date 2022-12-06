import {MdmAppConfigKeyType} from './mdmAppConfigKeyType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppConfigurationSettingItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** app configuration key. */
    appConfigKey?: string;
    /** App configuration key types. */
    appConfigKeyType?: MdmAppConfigKeyType;
    /** app configuration key value. */
    appConfigKeyValue?: string;
    /** The OdataType property */
    odataType?: string;
}
