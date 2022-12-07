import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {Entity, WorkbookChartFill, WorkbookChartFont} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartDataLabelFormat extends Entity implements Parsable {
    /** The fill property */
    private _fill?: WorkbookChartFill | undefined;
    /** The font property */
    private _font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartDataLabelFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fill property value. The fill property
     * @returns a workbookChartFill
     */
    public get fill() {
        return this._fill;
    };
    /**
     * Sets the fill property value. The fill property
     * @param value Value to set for the fill property.
     */
    public set fill(value: WorkbookChartFill | undefined) {
        this._fill = value;
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
            "fill": n => { this.fill = n.getObjectValue<WorkbookChartFill>(createWorkbookChartFillFromDiscriminatorValue); },
            "font": n => { this.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartFill>("fill", this.fill);
        writer.writeObjectValue<WorkbookChartFont>("font", this.font);
    };
}
