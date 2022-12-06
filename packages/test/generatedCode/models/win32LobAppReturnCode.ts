import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppReturnCode extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Return code. */
    returnCode?: number;
    /** Indicates the type of return code. */
    type?: Win32LobAppReturnCodeType;
}
