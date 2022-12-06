import {MediaInfo, Prompt} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MediaPrompt extends Partial<Parsable>, Prompt {
    /** The mediaInfo property */
    mediaInfo?: MediaInfo;
}
