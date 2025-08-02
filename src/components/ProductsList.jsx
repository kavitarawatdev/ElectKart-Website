import { GridViewProducts } from "../components/GridViewProducts";
import { ListViewProducts } from "../components/ListViewProducts";
import { useFilterContext } from "../hooks/customHook";

export const ProductsList = () => {
    const{ filterProducts, gridView, isFilterLoading,}=useFilterContext();
    
  
    if(isFilterLoading){
        return <h1>Loading..........</h1>
    }else if (gridView){
        return <GridViewProducts filterProducts={filterProducts}/>
    }else{
        return <ListViewProducts filterProducts={filterProducts}/>
    }
};