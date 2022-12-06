import {OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingBase64 extends OmaSetting, Partial<Parsable> {
    /** File name associated with the Value property (.cer */
    fileName?: string;
    /** Value. (Base64 encoded string) */
    value?: string;
}
