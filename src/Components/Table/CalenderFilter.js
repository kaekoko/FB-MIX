import { Input } from "reactstrap";
import { format } from "date-fns";
import { useAgentReportDate } from "@/Utils/Zustand";

const CalenderFilter = ({ date, setDate }) => {
  const { dateData, setDateData } = useAgentReportDate();
  const handleDatePicker = (e, type) => {
    e.preventDefault();

    setDate((prev) => {
      const newDate = [...prev];
      newDate[0][type] = new Date(e.target.value);
      return newDate;
    });

    setDateData(date);
  };

  return (
    <div className="d-flex gap-2 mb-2">
      <Input
        type="date"
        value={format(date[0].startDate, "yyyy-MM-dd")}
        onChange={(e) => handleDatePicker(e, "startDate")}
      />
      <Input
        type="date"
        value={format(date[0].endDate, "yyyy-MM-dd")}
        onChange={(e) => handleDatePicker(e, "endDate")}
      />

      {/* {isComponentVisible && (
        <DateRangePicker
          onChange={(item) => setDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={date ? date : false}
          endDatePlaceholder="End Date"
          footerContent={
            <CloseDateRange
              setDate={setDate}
              setIsComponentVisible={setIsComponentVisible}
            />
          }
          startDatePlaceholder="Start Date"
          direction="horizontal"
        />
      )} */}
    </div>
  );
};

export default CalenderFilter;
