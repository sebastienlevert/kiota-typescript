import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {Entity, WorkbookChartFont, WorkbookChartLineFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxisFormat extends Entity implements Parsable {
    /** The font property */
    private _font?: WorkbookChartFont | undefined;
    /** The line property */
    private _line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartAxisFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the font property value. The font property
     * @returns a workbookChartFont
     */
    public get font() {
        return this._font;
    };
    /**
     * Sets the font property value. The font property
     * @param value Value to set for the font property.
     */
    public set font(value: WorkbookChartFont | undefined) {
        this._font = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "font": n => { this.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
            "line": n => { this.line = n.getObjectValue<WorkbookChartLineFormat>(createWorkbookChartLineFormatFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the line property value. The line property
     * @returns a workbookChartLineFormat
     */
    public get line() {
        return this._line;
    };
    /**
     * Sets the line property value. The line property
     * @param value Value to set for the line property.
     */
    public set line(value: WorkbookChartLineFormat | undefined) {
        this._line = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartFont>("font", this.font);
        writer.writeObjectValue<WorkbookChartLineFormat>("line", this.line);
    };
}
