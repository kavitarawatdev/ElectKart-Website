import { GridViewProducts } from "../components/GridViewProducts";
import { ListViewProducts } from "../components/ListViewProducts";
import { Loading } from "../helper/Loading";
import { useFilterContext } from "../hooks/customHook";

export const ProductsList = () => {
    const{ filterProducts, gridView, isFilterLoading,}=useFilterContext();
    
  
    if(isFilterLoading){
        return <Loading message={'Loading Your Filter Products...'}/>
    }else if (gridView){
        return <GridViewProducts filterProducts={filterProducts}/>
    }else{
        return <ListViewProducts filterProducts={filterProducts}/>
    }
};