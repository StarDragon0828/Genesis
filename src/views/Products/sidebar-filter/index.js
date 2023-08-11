import { Stack } from "react-bootstrap"
import "./style.scss"
import View from "../../../components/UI/View"
import { filters } from "./data"

export default function SidebarFilter(props) {
  return <Stack className="sidebar-filter card">
    <View className="sidebar-header">
      <h4 className="text-filters">Filters</h4>
    </View>
    <Stack className="sidebar-body">
      {
        filters.map((filter, idx) => <View className="sidebar-items" key={`search-filter-${idx}`}>
          <h5 className="sidebar-title"> { filter.name } </h5>
          {
            filter.items.map((item, idx1) => <View className="sidebar-item" key={`search-filter-item-${idx}-${idx1}`}>
                { filter.type==="checkbox" && <input type="checkbox" /> } { item }
              </View>)
          }
        </View>)
      }
    </Stack>
  </Stack>
}